<!--
 * @Author: wgj
 * @Date: 2021-03-22 10:26:34
 * @LastEditTime: 2021-06-29 16:59:16
 * @LastEditors: wgj
 * @Description: 
-->
<template>
  <div class="about">
    <h1 class="test_class">This is an about page</h1>
    <el-button type="primary" @click="exportExcel">导出</el-button>
    <span>{{ 'G12' | getGradeName }}</span>
    <svg-icon icon-class="icon-xls" />
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <video-player v-if="playerOptions.sources[0].src" class="video-player vjs-custom-skin"
                  ref="videoPlayer"
                  :playsinline="true"
                  :options="playerOptions"
                  @play="onPlayerPlay($event)"
                  @pause="onPlayerPause($event)"
                  @ended="onPlayerEnded($event)"
                  @waiting="onPlayerWaiting($event)"
                  @playing="onPlayerPlaying($event)"
                  @loadeddata="onPlayerLoadeddata($event)"
                  @timeupdate="onPlayerTimeupdate($event)"
                  @canplay="onPlayerCanplay($event)"
                  @canplaythrough="onPlayerCanplaythrough($event)"
                  @statechanged="playerStateChanged($event)"
                  @ready="playerReadied"
    />
  </div>
</template>
<script>
import { getSchoolClass } from '@/api';
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'


export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
 src:'https://vd2.bdstatic.com/mda-mfu4b1jbm0qv2jf8/fhd/cae_h264_nowatermark/1624936912934522138/mda-mfu4b1jbm0qv2jf8.mp4?v_from_s=hkapp-haokan-hna&auth_key=1624958932-0-0-84804780a743e81e38e2353deb56aaf6&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=',
   playerOptions: {
          playbackRates: [0.5, 1.0, 1.5, 2.0, 3.0], // 可选的播放速度
          autoplay: false, // 如果为true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 是否视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: "video/mp4", // 类型
            src: 'http://ivi.bupt.edu.cn/hls/chchd.m3u8' // url地址
          }],
          poster: '', // 封面地址
          notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true, // 当前时间和持续时间的分隔符
            durationDisplay: true, // 显示持续时间
            remainingTimeDisplay: false, // 是否显示剩余时间功能
            fullscreenToggle: true // 是否显示全屏按钮
          }
        }
      
    };
  },
   components: {
    videoPlayer
  },
  	watch: {
		src: {
			handler(newval) {
				// console.log(newval);
				this.playerOptions.sources[0].src = newval;
				// console.log(this.playerOptions.sources[0].src, '视频赋值');
				this.src = newval;
			}
		}
	},
  methods: {
  // 播放回调
      onPlayerPlay(player) {
        console.log('player play!', player)
      },
      // 暂停回调
      onPlayerPause(player) {
        console.log('player pause!', player)
      },
      // 视频播完回调
      onPlayerEnded($event) {
        console.log(player)
      },
      // DOM元素上的readyState更改导致播放停止
      onPlayerWaiting($event) {
        console.log(player)
      },
      // 已开始播放回调
      onPlayerPlaying($event) {
        console.log(player)
      },
      // 当播放器在当前播放位置下载数据时触发
      onPlayerLoadeddata($event) {
        console.log(player)
      },
      // 当前播放位置发生变化时触发。
      onPlayerTimeupdate($event) {
        console.log(player)
      },
      //媒体的readyState为HAVE_FUTURE_DATA或更高
      onPlayerCanplay(player) {
        // console.log('player Canplay!', player)
      },
      //媒体的readyState为HAVE_ENOUGH_DATA或更高。这意味着可以在不缓冲的情况下播放整个媒体文件。
      onPlayerCanplaythrough(player) {
        // console.log('player Canplaythrough!', player)
      },
      //播放状态改变回调
      playerStateChanged(playerCurrentState) {
        console.log('player current update state', playerCurrentState)
      },
      //将侦听器绑定到组件的就绪状态。与事件监听器的不同之处在于，如果ready事件已经发生，它将立即触发该函数。。
      playerReadied(player) {
        console.log('example player 1 readied', player);
      },

    exportExcel() {
      const tHeader = ['姓名', '日期', '地址'];
      const filterVal = ['name', 'date', 'address'];
      const data = this.formatJson(filterVal, this.tableData);
      // let data = this.tableData
      import('@/vendor/Export2Excel').then((excel) => {
        excel.export_json_to_excel({
          header: tHeader, //表头 必填
          data, //具体数据 必填
          filename: 'demo', //非必填
          autoWidth: true, //非必填
          bookType: 'xlsx', //非必填
        });
      });
    },
      formatJson(filterVal, jsonData) {
      // return jsonData.map((v) => filterVal.map((j) => v[j]));
      return jsonData.map((v) =>
        filterVal.map((j) => {
          if (v[j] == null || v[j] == '') return;
          if (j === 'bindDate' || j === 'unbindDate') {
            return this.$moment(v[j]).format('YYYY-MM-DD HH:mm:ss');
          }
          if (j === 'sex') {
            return v[j] == 'S01' ? '男' : '女';
          }
          if (j === 'statusCd') {
            return v[j] == 'S01' ? '有效' : '无效';
          } else {
            return v[j];
          }
        })
      );
    },
    // 查询班级筛选条件
    getBelongClassOptions(val) {
      let obj = {
        schoolId: 24,
      };
      let params = {
        requestJson: JSON.stringify(obj),
      };
      console.log(obj);
      getSchoolClass(params).then((r) => {
        if (r.totalNum > 0) {
          let arr = r.data[0].SchoolClassVo;
          console.log('arr', arr);
        }
      });
    },
  },
  created () {
    this.playerOptions.sources[0].src = this.src;
  },
  mounted() {
    this.getBelongClassOptions();
    console.log('66');
  },
};
</script>
<style lang="scss" scoped>
h1 {
  // background: $common_blue;
}
</style>