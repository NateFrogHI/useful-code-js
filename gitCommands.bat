:: Do not run this, only for notes

:: Kill local changes and reset to master (or replace with other branch)
git reset --hard origin/master

:: Rebase with options on what to do with individual commits
git rebase -i master rem
