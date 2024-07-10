<template>
  <div class="global-partners-box">
    <div class="global-map-box">
      <div class="disflex ju-center al-center">
        <DvFlylineChartEnhanced
          :config="config" class="global-map"/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'global-partners',

  data() {
    return {
      config: {
        // bgImgSrc: require('~/assets/images/global-map.png'),
        halo: {
          show: true,
          duration: [30, 30],
          color: '#133ba0',
          radius: 30
        },
        text: {
          color: '#133ba0'
        },
        lines: [
          {
            source: '英国',
            target: '英国'
          }
        ],
        points: [
          {
            name: '马来西亚11',
            text: {
              show: true
            },
            coordinate: [0.76, 0.63]
          },
          {
            name: '英国',
            text: {
              show: true
            },
            coordinate: [0.46, 0.30]
          },
          {
            name: '四川',
            coordinate: [0.75, 0.4]
          },
          {
            name: '四川',
            coordinate: [0.71, 0.42]
          },
          {
            name: '四川',
            coordinate: [0.74, 0.43]
          },
          {
            name: '四川',
            coordinate: [0.75, 0.4],
            halo: {
              color: '#133ba0'
            }
          },
          {
            name: '北京',
            coordinate: [0.82, 0.3]
          },
          {
            name: '南京',
            coordinate: [0.75, 0.45]
          },
          {
            name: '南京',
            coordinate: [0.72, 0.47]
          },
          {
            name: '南京',
            coordinate: [0.73, 0.46]
          },
          {
            name: '北京',
            coordinate: [0.75, 0.42]
          },
          {
            name: '北京',
            coordinate: [0.7, 0.40]
          },
          {
            name: '北京',
            coordinate: [0.78, 0.38]
          },
          {
            name: '南京',
            coordinate: [0.73, 0.35]
          }
        ]
      },
    }
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.global-partners-box {
  width: 100%;

  .global-map-box {
    padding: 56px 0 0;

    .global-map {
      width: 900px;
      height: 473px;
      margin-right: 30px;
      margin-bottom: 61px;
    }
  }
}

/*中屏幕*/
@media screen and(max-width: $big-pc-width) {
  body .global-partners-box {
    .global-map-box {
      padding: 73px 0 0;

      .global-map {
        width: 716px;
        height: 355px;
        margin-right: 14px;
        margin-bottom: 46px;
      }
    }
  }
}

/*小屏幕*/
@media screen and (max-width: $pad-max-width) {
  body .global-partners-box {
    .global-map-box {
      padding: 20px 0 0;

      .global-map {
        width: 100vw;
        height: 50vw;
      }

    }
  }
}
</style>
