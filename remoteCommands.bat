:: Remote into machine with command line (will ask for password)
ssh <username>@<ip or url>

:: Transfer file from remote machine to local (will ask for password)
scp <username>@usbnl-shub001:<remote path>/<filename with extension> C:\<local path>

:: Transfer file from local to remote machine (will ask for password)
scp C:\<local path>\<filename with extension> <username>@usbnl-shub001:<remote path>
