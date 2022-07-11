const pg = require('pg');
const express = require('express');
const app = express();
app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
     where "gradeId" = $1
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId: ${gradeId}`
        });
      } else {

        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', function (req, res) {
  if (!req.body.name) {
    const error = { error: 'Name is a required field' };
    res.status(400).json(error);
    return;
  } else if (!req.body.course) {
    const error = { error: 'Course is a required field' };
    res.status(400).json(error);
    return;
  } else if (!req.body.score && req.body.score !== 0) {
    const error = { error: 'Score is a required field' };
    res.status(400).json(error);
    return;
  } else if (req.body.score < 0 || req.body.score > 100) {
    const error = { error: 'Score is invalid' };
    res.status(400).json(error);
    return;
  }

  const empty = [];
  empty[0] = req.body.name;
  empty[1] = req.body.course;
  empty[2] = req.body.score;

  const sql = `
  insert into "grades" ("name", "course", "score")
  values ($1, $2, $3)
    `;
  db.query(sql, empty)

    .then(result => {
      const max = `select *
  from "grades"
 order by "gradeId" desc
 limit 1;`;
      db.query(max)
        .then(result => {
          const grade = result.rows[0];
          res.status(201).json(grade);
        });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }

  const params = [gradeId];

  const sql = `
  delete from "grades"
 where "gradeId" = $1
 returning *
  `;
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId: ${gradeId}`
        });
      } else {
        res.status(204).send();
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });

});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!req.body.name) {
    const error = { error: 'Name is a required field' };
    res.status(400).json(error);
    return;
  } else if (!req.body.course) {
    const error = { error: 'Course is a required field' };
    res.status(400).json(error);
    return;
  } else if (req.body.score < 0 || req.body.score > 100) {
    const error = { error: 'Score is invalid' };
    res.status(400).json(error);
    return;
  } else if (!req.body.score && req.body.score !== 0) {
    const error = { error: 'Score is a required field' };
    res.status(400).json(error);
    return;
  } else if (!Number.isInteger(gradeId) || gradeId <= 0) {
    const error = { error: '"gradeId" must be a positive integer' };
    res.status(400).json(error);
    return;
  }
  const empty = [];
  empty[0] = req.body.name;
  empty[1] = req.body.course;
  empty[2] = req.body.score;
  empty[3] = gradeId;

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
  update "grades"
   set "name" = $1,
    "course" = $2,
    "score" = $3
 where "gradeId" = $4
 returning *
  `;
  db.query(sql, empty)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId: ${gradeId}`
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
