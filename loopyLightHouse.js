//printing numbers 100 to 200 with replacement
for (var count = 100; count <= 200; count++){
  
  if (((count % 3 ) === 0 ) && ((count % 4 ) === 0 )){
    console.log("LoopyLighthouse");
  } else if ((count % 3 ) === 0 ){
    console.log("Loopy");
  } else if ((count % 4) === 0 ){
    console.log("Lighthouse");
  } else {
    console.log(count);
  }
}