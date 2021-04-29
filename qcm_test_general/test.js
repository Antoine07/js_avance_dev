let inter = null;
const promise  = (u, v, n = 2) => new Promise(
    (resolve, reject) => {
        
        let count = 0 ;
        inter = setInterval(() => {
            if( count > n ){
                clearInterval(inter);
                resolve('End');

                return ;
            }

            [u, v] = [v, u + v];
            resolve([u, v]); 
            count++;
        }, 500);
    }
);

promise(1,1).then(res => {console.log(res); clearInterval(inter) ;});