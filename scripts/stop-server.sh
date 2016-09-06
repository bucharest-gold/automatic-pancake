#!/bin/bash

. scripts/version.sh

${WILDFLY}/bin/jboss-cli.sh --connect command=:shutdown