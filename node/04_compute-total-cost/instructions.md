A software company sells a package that retails for $99.
Quantity discounts are given according to the following table.
Write a program that asks for the number of units sold and computes the total cost.

Quantity    | Discount
10-19       | 20%
20-49       | 30%
50-99       | 40%
100 or more | 50%

So for example, if you ordered 5 items, it would cost you $495 (No discount).

If you ordered 25 items, it would cost you $1732.50 with 30% discount (25 * 99 - 25 * 99 * 0.3).

Note that you can use the round(a,2) method to round a number to two decimal places.
If a = 4.56789 and you code b = round(a,b), then b will be 4.57.
