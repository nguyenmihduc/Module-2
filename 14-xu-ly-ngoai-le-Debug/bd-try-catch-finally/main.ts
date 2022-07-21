function doOrThrow(error): true {
    if(Math.random() > 0.5) {
        console.log('true');
        return true;
    } else {
        throw error;
    }
}

try {
    doOrThrow('error1');
    doOrThrow('error2');
    doOrThrow('error6');
}
catch (e: any) {
    console.log('sai roi ong oi')
}
finally {
    console.log('Terminated')
}

