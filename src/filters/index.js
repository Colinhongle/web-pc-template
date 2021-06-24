export function getGradeName(grade) {
    let gradeName = '其他'
    switch (grade) {
      case 'G01':
        gradeName = '一年级'
        break
      case 'G02':
        gradeName = '二年级'
        break
      case 'G03':
        gradeName = '三年级'
        break
      case 'G04':
        gradeName = '四年级'
        break
      case 'G05':
        gradeName = '五年级'
        break
      case 'G06':
        gradeName = '六年级'
        break
      case 'G07':
        gradeName = '初一'
        break
      case 'G08':
        gradeName = '初二'
        break
      case 'G09':
        gradeName = '初三'
        break
      case 'G10':
        gradeName = '高一'
        break
      case 'G11':
        gradeName = '高二'
        break
      case 'G12':
        gradeName = '高三'
        break
    }
    return gradeName
  }