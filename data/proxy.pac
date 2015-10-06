var _http_map = {
  'white': {
    'any': []
  },
  'proxy': {
    'any': [
      /^[^/]*\.dpool\.sina\.com\.cn\/iplookup/i,
      /^[^/]*\/vrs_flash\.action/i
    ],
    'v.youku.com': [
      /^\/player\//i
    ],
    'api.youku.com': [
      /^\/player\//i
    ],
    'play.youku.com': [
      /^\/play\/get\.json/i
    ],
    'www.tudou.com': [
      /^\/a\//i,
      /^\/v\//i,
      /^\/outplay\/goto\//i,
      /^\/tvp\/alist\.action/i,
      /^\/programs\/view\//i,
      /^\/albumplay\//i,
      /^\/listplay\//i
    ],
    's.plcloud.music.qq.com': [
      /^\/fcgi\-bin\/p\.fcg/i
    ],
    'i.y.qq.com': [
      /^\/s\.plcloud\/fcgi\-bin\/p\.fcg/i
    ],
    'hot.vrs.sohu.com': [
      /^\//i
    ],
    'live.tv.sohu.com': [
      /^\/live\/player/i
    ],
    'pad.tv.sohu.com': [
      /^\/playinfo/i
    ],
    'my.tv.sohu.com': [
      /^\/play\/m3u8version\.do/i
    ],
    'hot.vrs.letv.com': [
      /^\//i
    ],
    'data.video.qiyi.com': [
      /^\/v\./i,
      /^\/videos\//i,
      /^\/.*\/videos\//i
    ],
    'cache.video.qiyi.com': [
      /^\/vms\?/i,
      /^\/vp\/.*\/.*\/\?src=/i,
      /^\/vps\?/i,
      /^\/liven\//i
    ],
    'cache.vip.qiyi.com': [
      /^\/vms\?/i
    ],
    'v.api.hunantv.com': [
      /^\/player\/video/i
    ],
    'vv.video.qq.com': [
      /^\//i,
      /^\/getvinfo/i,
      /^\/getinfo/i,
      /^\/geturl/i
    ],
    'tt.video.qq.com': [
      /^\/getvinfo/i
    ],
    'ice.video.qq.com': [
      /^\/getvinfo/i
    ],
    'tjsa.video.qq.com': [
      /^\/getvinfo/i
    ],
    'a10.video.qq.com': [
      /^\/getvinfo/i
    ],
    'xyy.video.qq.com': [
      /^\/getvinfo/i
    ],
    'vcq.video.qq.com': [
      /^\/getvinfo/i
    ],
    'vsh.video.qq.com': [
      /^\/getvinfo/i
    ],
    'vbj.video.qq.com': [
      /^\/getvinfo/i
    ],
    'bobo.video.qq.com': [
      /^\/getvinfo/i
    ],
    'flvs.video.qq.com': [
      /^\/getvinfo/i
    ],
    'bkvv.video.qq.com': [
      /^\/getvinfo/i
    ],
    'info.zb.qq.com': [
      /^\/\?/i
    ],
    'qzs.qq.com': [
      /^\/tencentvideo_v1\//i
    ],
    'geo.js.kankan.xunlei.com': [
      /^\//i
    ],
    'web-play.pptv.com': [
      /^\//i
    ],
    'web-play.pplive.cn': [
      /^\//i
    ],
    'dyn.ugc.pps.tv': [
      /^\//i
    ],
    'v.pps.tv': [
      /^\/ugc\/ajax\/aj_html5_url\.php/i
    ],
    'inner.kandian.com': [
      /^\//i
    ],
    'ipservice.163.com': [
      /^\//i
    ],
    'so.open.163.com': [
      /^\/open\/info\.htm/i
    ],
    'zb.s.qq.com': [
      /^\//i
    ],
    'ip.kankan.xunlei.com': [
      /^\//i
    ],
    'vxml.56.com': [
      /^\/json\//i
    ],
    'music.sina.com.cn': [
      /^\/yueku\/intro\//i,
      /^\/radio\/port\/webFeatureRadioLimitList\.php/i
    ],
    'play.baidu.com': [
      /^\/data\/music\/songlink/i
    ],
    'v.iask.com': [
      /^\/v_play\.php/i,
      /^\/v_play_ipad\.cx\.php/i
    ],
    'tv.weibo.com': [
      /^\/player\//i
    ],
    'wtv.v.iask.com': [
      /^\/.*\.m3u8/i,
      /^\/mcdn\.php$/i,
      /^\/player\/ovs1_idc_list\.php/i
    ],
    'video.sina.com.cn': [
      /^\/interface\/l\/u\/getFocusStatus\.php/i
    ],
    'www.yinyuetai.com': [
      /^\/insite\//i,
      /^\/main\/get\-/i
    ],
    'api.letv.com': [
      /^\/streamblock/i,
      /^\/mms\/out\/video\/play/i,
      /^\/mms\/out\/common\/geturl/i,
      /^\/geturl/i,
      /^\/api\/geturl/i
    ],
    'st.live.letv.com': [
      /^\/live\//i
    ],
    'live.gslb.letv.com': [
      /^\/gslb\?/i
    ],
    'static.itv.letv.com': [
      /^\/api/i
    ],
    'ip.apps.cntv.cn': [
      /^\/js\/player\.do/i
    ],
    'vdn.apps.cntv.cn': [
      /^\/api\/get/i
    ],
    'vdn.live.cntv.cn': [
      /^\/api2\/liveHtml5\.do\?channel=pa:\/\/cctv_p2p_hdcctv5/i,
      /^\/api2\/liveHtml5\.do\?channel=pa:\/\/cctv_p2p_hdcctv6/i,
      /^\/api2\/liveHtml5\.do\?channel=pa:\/\/cctv_p2p_hdcctv8/i,
      /^\/api2\/liveHtml5\.do\?channel=pa:\/\/cctv_p2p_hdbtv6/i
    ],
    'vip.sports.cntv.cn': [
      /^\/check\.do/i,
      /^\/play\.do/i,
      /^\/servlets\/encryptvideopath\.do/i
    ],
    '211.151.157.15': [
      /^\//i
    ],
    'pay.youku.com': [
      /^\/buy\/redirect\.html/i
    ],
    'pay.tudou.com': [
      /^\/buy\/redirect\.html/i
    ],
    'aid.video.qq.com': [
      /^\/fcgi\-bin\/userip\?/i
    ],
    'aidbak.video.qq.com': [
      /^\/fcgi\-bin\/userip\?/i
    ],
    'pay.video.qq.com': [
      /^\/fcgi\-bin\/paylimit/i
    ],
    'paybak.video.qq.com': [
      /^\/fcgi\-bin\/paylimit/i
    ],
    'chrome.2345.com': [
      /^\/dianhua\/index\.php\?m=call&f=check&/i
    ]
  }
};
var _https_map = {
  'white': {
    'any': []
  },
  'proxy': {
    'any': []
  }
};
var _proxy_str = 'SECURE.UKU.IM993 HTTPS; PROXY.MAINLAND.IO993 HTTPS; DIRECT;';

function _check_regex_list(regex_list, str) {
  var i;
  for (i = 0; i < regex_list.length; i++)
    if (regex_list[i].test(str))
      return true;
  return false;
}

function _check_patterns(patterns, hostname, full_url, prot_len) {
  if (patterns.hasOwnProperty(hostname))
    if (_check_regex_list(patterns[hostname],
        full_url.slice(prot_len + hostname.length)))
      return true;
  if (_check_regex_list(patterns.any,
      full_url.slice(prot_len)))
    return true;
  return false;
}

function _find_proxy(url_map, host, url, prot_len) {
  if (_check_patterns(url_map.white, host, url, prot_len))
      return 'DIRECT';
  if (_check_patterns(url_map.proxy, host, url, prot_len))
    return _proxy_str;
  return 'DIRECT';
}

function FindProxyForURL(url, host) {
  var prot = url.slice(0, 6);
  if (prot === 'http:/')
    return _find_proxy(_http_map, host, url, 7);
  else if (prot === 'https:')
    return _find_proxy(_https_map, host, url, 8);
  return 'DIRECT';
}
