#!/bin/bash

# Copyright 2016 Red Hat, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License")
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

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