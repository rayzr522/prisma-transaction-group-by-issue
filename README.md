# prisma-transaction-group-by-issue

> A small demo repo showing a typing issue in Prisma 4.8.1 when using `groupBy` in a `$transaction`

## setup

```bash
# clone the repo
git clone https://github.com/rayzr522/prisma-transaction-group-by-issue.git
cd prisma-transaction-group-by-issue

# install dependencies
pnpm install

# set up the db
pnpm prisma migrate deploy

# attempt to run the script
pnpm start
```
