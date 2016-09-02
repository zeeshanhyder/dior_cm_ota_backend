var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(405, 'Method Not Allowed');
});

router.post('/', function(req, res, next){
  res.format({
    'application/json': function(){
        res.send(

          {
            "id": null,
            "result": [
              {
                "url": "http://get.cm/get/jenkins/177041/cm-13.0-20160901-NIGHTLY-hammerhead.zip",
                "timestamp": "1472708194",
                "md5sum": "c86a261674035dd8ebfa152a56d66895",
                "filename": "cm-13.0-20160901-NIGHTLY-hammerhead.zip",
                "incremental": "0154f4516a",
                "channel": "nightly",
                "changes": "http://get.cm/get/jenkins/177041/CHANGES.txt",
                "api_level": 23
              },
              {
                "url": "http://get.cm/get/jenkins/176902/cm-13.0-20160831-NIGHTLY-hammerhead.zip",
                "timestamp": "1472622120",
                "md5sum": "a862eb22de66ae71f0d13d4d21ea480e",
                "filename": "cm-13.0-20160831-NIGHTLY-hammerhead.zip",
                "incremental": "8c7bc7db3f",
                "channel": "nightly",
                "changes": "http://get.cm/get/jenkins/176902/CHANGES.txt",
                "api_level": 23
              },
              {
                "url": "http://get.cm/get/jenkins/176764/cm-13.0-20160830-NIGHTLY-hammerhead.zip",
                "timestamp": "1472536828",
                "md5sum": "5f11208b2a13e3b118c229fff989c7cf",
                "filename": "cm-13.0-20160830-NIGHTLY-hammerhead.zip",
                "incremental": "2b7f0d25ae",
                "channel": "nightly",
                "changes": "http://get.cm/get/jenkins/176764/CHANGES.txt",
                "api_level": 23
              }
            ],
            "error": null
          }



        );
    }
  });
});

module.exports = router;
