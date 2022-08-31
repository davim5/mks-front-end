import ContentLoader from "react-content-loader"
import { SkeletonContainer } from "./styles"

export function Shimmer() {
    return (
        <ContentLoader 
            speed={2}
            width={340}
            height={84}
            viewBox="0 0 340 84"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <SkeletonContainer>
            <rect width="200" height="300" /> 
            <rect width="200" height="300" /> 
            <rect width="200" height="300" /> 
            <rect width="200" height="300" /> 
            <rect width="200" height="300" /> 
            <rect width="200" height="300" /> 
            <rect width="200" height="300" /> 
            <rect width="200" height="300" /> 
            <rect width="200" height="300" /> 
            </SkeletonContainer>
            
            
        </ContentLoader>
    )
}