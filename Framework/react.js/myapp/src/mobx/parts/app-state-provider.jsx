// import { Provider } from 'mobx-react';
// import * as React from 'react';
// import { AppState } from '../common/app-state';
// export class AppStateProvider extends React.Component {
//     appState = new AppState();
//     render() {
//         return (
//             <Provider appState={ this.appState }>
//                 {this.props.children}
//             </Provider>
//         );
//     }
// }


import { Provider } from 'mobx-react';
import * as React from 'react';
import rootState from '../parts/store';

export class AppStateProvider extends React.Component {
    render() {
        return (
            <Provider rootState={ rootState }>
                {this.props.children}
            </Provider>
        );
    }
}
