import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Employees.css';
import Employee from './Employee/Employee';
// let data, isShow = false;


export default function Employees() {

  const [obj, setObj] = useState([{}]);
  // const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    fetch('https://dummy.restapiexample.com/api/v1/employees', {
      method: 'GET',
      headers: {
        'Origin': 'https://dummy.restapiexample.com',
        'Access-Control-Request-Method': 'GET'
      },
      mode: 'cors'
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log('没报错');
        // myJson有数据了
        console.log(myJson.data);
        setObj(myJson.data);
        console.log(obj); //undefined
        return myJson;
      })
      .catch(function (error) {
        console.log('报错：' + error);
      });

  }, []);
  useEffect(() => {
    console.log('奇怪的方法')
    console.log(obj)
  }, [obj])



  return (
    <div>
      <div className="employees">
        {
          obj.map((item, index) => {
            return (
              <Employee key={index} item={item} />
              // <div key={index} style={{width: '100px'}}> {item.id }</div>
            )
          })
        }
      </div>
    </div>
  );
}







    // const fetchData = async () => {
    //     setIsLoading(true);
    //     const result =  await axios('https://dummy.restapiexample.com/api/v1/employees');
    //     setData(result.data);
    //     setIsLoading(false);
    // }
    // fetchData();
    // console.log('执行了');
    // console.log(data);
    // console.log('执行了', isLoading);




//   useEffect(() => {


//     fetch('https://dummy.restapiexample.com/api/v1/employees', {
//   method: 'GET',
//   headers: {
//     'Origin': 'https://dummy.restapiexample.com',
//     'Access-Control-Request-Method': 'GET'
//   },
//   mode: 'cors'
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (myJson) {
//     data = myJson;
//     console.log('没报错')
//     console.log(data);
//     isShow = true;

//     setObj(data);
//     console.log('这是obj: ')
//     console.log(obj);


//   }).catch(function (error) {
//     console.log('报错：'+error);
//   });
//   },[isShow])