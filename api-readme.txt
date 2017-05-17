/****************************************************************************/
Yous-API请求Head头设置
URL:http://localhost:8001/api/GetServiceApiResult

Content-Type: application/json
Host: localhost:8001
Content-Length: 64

/****************************************************************************/

模块-用户中心（10-开头）
-----------------------------------------------------------------------------
API名称 ：     获取用户列表--待确认
APICode ：     10000001
RequestJson： {"parameters":{},"foreEndType":2,"code":"10000001"}
ResponseJson  {"success":true,"message":"ok","data":[],"code":null}



模块-官网首页（20-开头）

-----------------------------------------------------------------------------
API名称 ：     获取区域
APICode ：     20000001
RequestJson： {"parameters":{"province_id":1},"foreEndType":2,"code":"20000001"}
ResponseJson  {"success":true,"message":"ok","data":[],"code":null}
-----------------------------------------------------------------------------

API名称 ：     获取核心商圈
APICode ：     20000002
RequestJson： {"parameters":{"area_id":1},"foreEndType":2,"code":"20000002"}
ResponseJson  {"success":true,"message":"ok","data":[],"code":null}

-----------------------------------------------------------------------------
