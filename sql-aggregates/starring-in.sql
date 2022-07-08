select "s"."name" as "genre",
       count("p".*) as "totalAmount"
  from "genres" as "s"
  join "filmGenre" as "p" using ("genreId")
  join "castMembers" using ("filmId")
  join "actors" as "a" using ("actorId")
  where "a"."lastName" = 'Monroe'
    and "a"."firstName" = 'Lisa'
 group by "s"."genreId";
