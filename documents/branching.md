[comment]: # (You are viewing this in a raw form, for a more comprehensive view. View it on github.)

Branching
=========

Resources
---------

[Example branching model](http://nvie.com/posts/a-successful-git-branching-model/)
A blog post discussing a branching model a developer uses for work and personal projects.

[tryGit](https://try.github.io)
Learn how to use Git by reviewing the basic concepts of Git version control. Try out this introductory course that was created with GitHub.

CS3440 Branch Names
-------------------

###master
  * __Nobody__ commits here but CGL.

###dev
  * Only __working__ code is committed here.
  * No direct commits here, make changes on feature branch.
  * Code must be merged from feature branch.
  * At least 2 people have to have read the code to be merged/committed.
  * Code must be tested after merge.

###feature/x
  * Intermediate code, that may not be fully functional.
  * __x__ should represent the feature being developed.
  * Branches from dev by developer.
  * Pushed to remote by developer.
  * Pulled from remote by reviewer.
  * Tested code by reviewer.
  * Merged to dev and pushed to remote by reviewer.
  * Deleted from remote by developer.
  * Deleted from local by reviewer and developer.

###bug/x
  * Intermediate code, that is inteded to fix a bug on dev.
  * __x__ should represent the bug being fixed.
  * Branches from dev by developer.
  * Pushed to remote by developer.
  * Pulled from remote by reviewer.
  * Merged to dev and pushed to remote by reviewer.
  * Deleted from remote by developer.
  * Deleted from local by reviewer and developer.

Developer
---------
  1. Create feature branch.
    ```shell
    $ git checkout -b <branchName> dev
    ```

  2. Develop feature in branch.
    > git add/commit/etc.

  3. feature complete, push to remote for review
    ```shell
    $ git push -u origin <branchName>
    ```

Reviewer
--------
  1. Pull branch from remote.
    1. Make sure branch is known by local repository.
      ```shell
      $ git pull
      ```

    2. Checkout the feature branch.
      ```shell
      $ git checkout <branchName>
      ```

    3. Make sure latest data from feature branch are local.
      ```shell
      $ git pull
      ```

  2. Merge branch into dev.
    1. Switch to dev branch.
      ```shell
      $ git checkout dev
      ```

    2. Make sure latest data from dev are local.
      ```shell
      $ git pull
      ```

    3. Merge feature branch into dev.
      ```shell
      $ git merge <branchName>
      ```

    4. Resolve any conflicts.
      > edit, git add, git commit, etc.

    5. Make branch consistent with other code committed to dev.
      ```shell
      $ git pull origin dev
      ```

    6. Resolve any conflicts.
      > edit, git add, git commit, etc.

    7. Make code available to the rest of the team.
      ```shell
      $ git push origin dev
      ```

  3. Pull the updated copy of dev.
    1. Checkout dev branch.
      ```shell
      $ git checkout dev
      ```

    2. Pull
      ```shell
      $ git pull origin dev
      ```

    3. Check that content is really there.
      > view files/compile/run/etc.

  4. Delete local copy of feature branch.
    ```shell
    $ git branch -d <branchName>
    ```

  5. Delete remote feature branch.
    ```shell
    $ git push origin --delete <branchName>
    ```

Developer and Reviewer
----------------------
Remove non-existant remote branches.
```shell
  $ git remote update origin --prune
```
