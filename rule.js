module.exports = {
  summary: 'a rule to hack response',
  *beforeSendResponse(requestDetail, responseDetail) {
    console.log(requestDetail)
   
    return {response: responseDetail.response}
  },
};