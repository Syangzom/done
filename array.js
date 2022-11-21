// arr1=new Array('purple','green', 'yellow')
// arr2=['black', 'orange', 'pink']
// console.log(arr1)
// console.log(arr2)

// arr1=new Array(10)
// arr2=[10]
// console.log(arr1)
// console.log(arr2)

// let arr=['hi there', 5, true]
// console.log(typeof arr[0])
// console.log(typeof arr[1])
// console.log(typeof arr[2])


// console.log(arr)

//  const shopping ='bread,milk,cheese,humus,noodles'
//  const food=shopping.split(',')
//  const sin=food.join(',')

//  console.log(food)
//  console.log(sin)
//  console.log(sin.toString())
//  shopping[0]='taihini'
//  console.log(shopping)
//  console.log('length of food:', food.length)

// favouritefruits=['grapefruit', 'orange','lemon']
// favouritefruits.push('tangerine')
// console.log(favouritefruits)

// let arr5=[1,2,3]
// let arr6=[4,5,6]
// let arr7=arr5.concat(arr6)
// console.log(arr7)

// let arr5=[1,2,3]
// let arr6=[4,5,6]
// let arr7=arr5.concat(arr6)
// let arr8=arr7.concat(7,8,9)
// arr8.pop()
// arr8.shift()
// arr8.splice(1,3)
// let findindex1=arr8.indexOf(6)
// let fi2=arr8.indexOf(10)
// console.log(findindex1, fi2)
// console.log(arr8)

// let animals=['dog', 'horse', 'cat', 'dog', 'cow', 'dog']
// let fi3=animals.indexOf('dog', 2)
// console.log(fi3)
// let lastdog=animals.lastIndexOf('dog')
// console.log(lastdog)

// const birds=['parrot','falocn','owl']
// for(const bird of birds){
//     console.log(birds)
// }

// let greet='thimphu'
// for(let cha of greet){
//     console.log9(cha)
// }

// let showroom=[
//     ['b','m','l'],
//     ['j','l','b'],
//     ['b','a','p'],
// ]
// console.log(showroom.length)
// for(let i=0;i<showroom.length;i++){
//     console.log(showroom[i])
// }

// for(let i=0;i<showroom.length;i++){
//     for(let j=0;j<showroom[i].length;j++){
//         console.log(showroom[i][j])
//     }
// }

a1=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

a2=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
a3=[[],[],[]]
for(let i=0;i<a1.length;i++){
    for(let j=0;j<a1[i].length;j++){
        a3[i][j]=a1[i][j]+a2[i][j]
        

    }
    console.log(a3)   
}