# Fibonacci Schwarzenegger

### The Cloud-Based Fibonacci Calculator on Steroids

This calculator will calculate any Fibonacci index under 40.
Donate for bigger server before you complain about this limitation.

In addition to running the calculation it stores the visited index in an SQL Database.
It will also store the response string in a redis cache.

If the value has been previous visited since the Database was last reset, it will pull the result from the redis cache to avoid recalculating.

This data will persist across sessions.

![Fib System Design](https://i.imgur.com/LoVEFvC.png)
