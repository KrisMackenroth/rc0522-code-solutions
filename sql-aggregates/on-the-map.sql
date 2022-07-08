select "s"."name" as "countries",
       count("p".*) as "totalCities"
  from "countries" as "s"
  join "cities" as "p" using ("countryId")
 group by "s"."countryId";
