import Mock from 'mockjs' // 引入mock.js

//使用extend可以扩展mockjs的属性--随机生成手机号码
Mock.Random.extend({
    phone(){
        //电话号码前缀
        const phonePrefixs = ['135','189','136']
        //使用pick随机返回前缀
        return this.pick(phonePrefixs) + Mock.mock(/\d{8}/)
    }
})
// 定义后台会返回的数据
// 常用的表格数据结构
var data = []
data = Mock.mock({
    'data|5': [{ //生成10条数据
        'id|+1':1, //id会自增
        roleName: '@cname',//随机生成姓名--中文名
        roleNum: '@string("number",10)', // 随机生成10位数字
        rolePhone:Mock.Random.phone(),
    }],
    'code': '201',
    'message':'返回mock数据'
})

const listAdd = function(options) {
    try {
      var obj = JSON.parse(options)
      var newArr = []
      newArr[0] = obj
      data.data = data.data.concat(newArr[0]) // 将前台返回来的数据，拼接到数组中
      return {
        code: '2000',
        message: '建单成功！'
      }
    } catch (error) {
      return {
        code: 'error',
        message: options
      }
    }
  }

// 根据数据模板生成模拟数据
// Mock.mock('/data/index','post',data)
Mock.mock('/data/index','get',()=>{return data})
//实现增加学生功能
Mock.mock('/add','post',({body}) => {
    const { data1 } = JSON.parse(body)
    data.data.push(data1)
    return { code: 0, data: data.data }
})
//数据的添加操作
// 根据id删除对应数据
// Mock.mock('/delById','post',({id})=>{
//     return{
//         code:0,data:id
//     }

// })
Mock.mock('/delById','post',({body}) => {
    // 拿到传过来的id
    const id = JSON.parse(body).data
    // 数组删掉一个
    data.data.splice(id,1)
    return{
        code:2,
        message:data.data
    }
})
// 学生的期末成绩
var score = []
score = Mock.mock({
  'data|20':[{ //随机生成10条学生成绩
    'id|+1':1, //id自增
    name:'@cname', //学生姓名
    fscore:'@integer(1,100)' //随机生成指定范围内的数字
  }]
})
//生成学生期末成绩
Mock.mock('/getScore','get',()=>{
  return score
})
