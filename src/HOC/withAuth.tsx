import React from 'react';

type injectedProps = {
    props: any,
    userAuth: any
}

function withAuth<BaseProps extends injectedProps>(Component: React.ComponentType<BaseProps>){
    return (props: BaseProps)=>{
        if (props)
        return (
            <Component {...props}/>
        );
    } 
};

export default withAuth;