select "s"."firstName",
"s"."lastName",
       sum("p"."amount") as "totalAmount"
  from "customers" as "s"
  join "payments" as "p" using ("customerId")
 group by "s"."customerId"
  order by "totalAmount" desc;
