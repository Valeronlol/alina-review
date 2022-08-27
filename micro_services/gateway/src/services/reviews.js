const path = require('path');
const fs = require('fs');
const formidable = require('formidable');
const sharp = require('sharp');

exports.upload = (req) => new Promise(((resolve, reject) => {
    formidable({
        uploadDir: `${process.cwd()}/public/images/original`,
        multiples: true,
        filename: ($, _, {originalFilename}) => `${originalFilename}`,
    })
        .parse(req, (err, fields, files) => {
            err ? reject(err) : resolve({ fields, files });
        })
}))