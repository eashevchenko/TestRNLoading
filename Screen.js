import React, { Component } from 'react'
import RNProgressHud from 'react-native-progress-display';

export default class ScreenComponent extends React.Component {

    startLoading(message = 'Loading...') {
        RNProgressHud.showWithStatus(message);
    }

    startLoadingWithMask(message = 'Loading...', useMask = true) {
        const ProgressHUDMaskType = RNProgressHud.ProgressHUDMaskType;
        const mask = useMask ? ProgressHUDMaskType.Black : ProgressHUDMaskType.Clear
        RNProgressHud.showWithStatus(message, mask);
    }

    startProgressLoading(message = 'Downloading...') {
        let progress = 0
        let displacement = 0.05;
        let limitOfProgress = 1.00;
        let tickInSeconds = 1000;

        const startProgress = setInterval(() => {
            
            progress = progress + displacement;

            RNProgressHud.showProgressWithStatus(progress, message);

            if (Math.floor(progress) === limitOfProgress) {
                clearInterval(startProgress);
            }

        }, tickInSeconds);
    }



    dismissLoadingWithDelay(seconds = 1) {
        RNProgressHud.dismissWithDelay(seconds)
    }

    dismissLoading() {
        RNProgressHud.dismiss();
    }

    constructor(props) {
        super(props);
    }

    render() {
        console.log('rendering')
    }
}
