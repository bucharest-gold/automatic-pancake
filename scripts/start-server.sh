#!/bin/bash

. scripts/version.sh

function waitForServer {
  C=50
  while [ $C -gt 0 ]
  do
    grep "WildFly Full 10.1.0.Final (WildFly Core 2.2.0.Final) started" server.log
    if [ $? -eq 0 ]; then
      echo "Server started."
      C=0
    else
      echo -n "."
      C=$(( $C - 1 ))
    fi
    sleep 1
  done
}

ARCHIVE="${WILDFLY}.tar.gz"
URL="http://download.jboss.org/wildfly/${VERSION}/${ARCHIVE}"

if [ ! -e $WILDFLY ]
then
  wget $URL
  tar xzf $ARCHIVE
  rm -f $ARCHIVE
fi

$WILDFLY/bin/standalone.sh -Djava.net.preferIPv4Stack=true > server.log 2>&1 &

waitForServer