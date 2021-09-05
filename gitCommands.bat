:: Do not run this, only for notes

:: Create or update the initial branch to be "main" instead of "master"
git init --initial-branch=main
git init -b main
:: or to update existing
git config --global init.defaultBranch main

:: Kill local changes and reset to master (or replace with other branch)
git reset --hard origin/master

:: Rebase with options on what to do with individual commits
git rebase -i master rem

:: Rebase steps prior to PR
git checkout <dev-branch>
git pull --rebase
git checkout <my-feature-branch>
git rebase <dev-branch>
:: <Resolve merge conflicts>
git push -f
