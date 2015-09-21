#!/usr/bin/env babel-node --optional es7.asyncFunctions

import fs from 'fs';
import path from 'path';
import { Schema } from '../data/schema';
import { graphql }  from 'graphql';
import { introspectionQuery, printSchema } from 'graphql/utilities';
var fetch = require('node-fetch')


// Save JSON of full schema introspection for Babel Relay Plugin to use
async () => {
  var result = await (fetch('http://matka.hsl.fi/otp/routers/default/index/graphql', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: introspectionQuery,
    }),
  }));
  if (result.errors) {
    console.error(
      'ERROR introspecting schema: ',
      JSON.stringify(result.errors, null, 2)
    );
  } else {
    fs.writeFileSync(
      path.join(__dirname, '../data/schema.json'),
      JSON.stringify(result.data, null, 2)
    );
  }
}();
