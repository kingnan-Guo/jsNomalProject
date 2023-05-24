function getIP(callback) {
    let recode = {};
    let RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    if (!RTCPeerConnection) {
      let win = iframe.contentWindow;
      RTCPeerConnection = win.RTCPeerConnection || win.mozRTCPeerConnection || win.webkitRTCPeerConnection;
    }
    //创建实例，生成连接
    let pc = new RTCPeerConnection();
    // 匹配字符串中符合ip地址的字段
    function handleCandidate(candidate) {
      let ip_regexp = /([0-9]{1,3}(\.[0-9]{1,3}){3}|([a-f0-9]{1,4}((:[a-f0-9]{1,4}){7}|:+[a-f0-9]{1,4}){6}))/;
      let ip_isMatch = candidate.match(ip_regexp)[1];
      
      if (!recode[ip_isMatch]) {
        callback(ip_isMatch);
        recode[ip_isMatch] = true;
      }
    }
    //监听icecandidate事件
    pc.onicecandidate = (ice) => {
      if (ice.candidate) {
        handleCandidate(ice.candidate.candidate);
      }
    };
    //建立一个伪数据的通道
    pc.createDataChannel('');
    pc.createOffer((res) => {
      pc.setLocalDescription(res);
    }, () => {});
   
    //延迟，让一切都能完成
    setTimeout(() => {
      let lines = pc.localDescription.sdp.split('\n');
      lines.forEach(item => {
        if (item.indexOf('a=candidate:') === 0) {
          handleCandidate(item);
        }
      })
    }, 1000);
  }
   
  getIP((ip) =>{
    console.log("得到的本地IP :" + ip); // 192.168.1.80
  });


//   解决方案：

// 火狐(FireFox) 删除隐藏IP
// 浏览器输入 about:config

// 搜索配置 media.peerconnection.enabled 改为false ( 刷新程序,IP正常显示 )

// 谷歌(Chrome) 删除隐藏IP
// 浏览器输入：chrome://flags/#enable-webrtc-hide-local-ips-with-mdns

// 把 Anonymize local IPs exposed by WebRTC 设置为 disabled ( 刷新程序,IP正常显示 )

// eage浏览器删除隐藏ip
// 浏览器输入: edge://flags/#enable-webrtc-hide-local-ips-with-mdns

// 把 Anonymize local IPs exposed by WebRTC 设置为 disabled ( 刷新程序,IP正常显示 )
// ————————————————
// 版权声明：本文为CSDN博主「吱夏cz」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。