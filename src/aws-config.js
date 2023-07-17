import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: 'AKIA2ULIAJYJZEBF7IBG',
  secretAccessKey: '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',
  region: 'us-west-2'
});

const s3 = new AWS.S3();

export default s3;