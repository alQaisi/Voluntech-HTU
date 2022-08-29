import { LinkComponent,NavLinkComponent } from './link.styles';

function Link({children,type,...linkProps}){
    if(type==="navlink")
        return(
            <NavLinkComponent {...linkProps}>{children}</NavLinkComponent>
        )
    return(
        <LinkComponent {...linkProps}>{children}</LinkComponent>
    );
}
export default Link;