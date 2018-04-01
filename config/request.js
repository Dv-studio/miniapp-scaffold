const request = (url, method = 'get', data = {}, header = {}) => {
  wx.showLoading({
    title: '加载中',
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      method,
      data,
      header,
      success: function(data) {
        resolve(data)
        wx.hideLoading()
      },
      fail: function(err) {
        reject(err)
        wx.hideLoading();
      }
    })
  })
}

module.exports = {
  request: request
}