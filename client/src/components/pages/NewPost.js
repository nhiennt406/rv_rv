// import React from 'react'
// import { Grid, Image, Item } from 'semantic-ui-react'
// import Mobile from './Mobile'
// const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
// const Items = () => (
//     <div>

//         <Grid>
//             <Grid.Row>
//                 <Grid.Column width={8}>
//                     <Item>
//                         {/* <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' /> */}
// <Mobile/>
//                         <Item.Content>
//                             <Item.Header>Arrowhead Valley Camp</Item.Header>
//                             <Item.Meta>
//                                 <span className='price'>$1200</span>
//                                 <span className='stay'>1 Month</span>
//                             </Item.Meta>
//                             <Item.Description>{paragraph}</Item.Description>
//                         </Item.Content>
//                     </Item>
//                 </Grid.Column>
//                 <Grid.Column width={8}>
//                     <Item>
//                         <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />

//                         <Item.Content>
//                             <Item.Header>Arrowhead Valley Camp</Item.Header>
//                             <Item.Meta>
//                                 <span className='price'>$1200</span>
//                                 <span className='stay'>1 Month</span>
//                             </Item.Meta>
//                             <Item.Description>{paragraph}</Item.Description>
//                         </Item.Content>
//                     </Item>
//                 </Grid.Column>
//             </Grid.Row>


//         </Grid>

//     </div>
// )
// export default Items


import React, { useEffect } from "react";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getPost } from "../../actions/post";
import MobileItem from "./MobileItem";
import { Grid } from "semantic-ui-react";
const Mobile = ({ getPost, post: { posts, loading } }) => {
  useEffect(() => {
    getPost();
  }, [getPost]);
  return loading ? (
    <Spinner />
  ) : 
  (
    <div>
      {/* <div className="mobile-banner"></div> */}

      <h1
        className="ui header"
        style={{
          paddingBottom: "20px",
          textAlign: "center"
        }}
      >
       TIN MỚI ĐĂNG
      </h1>
      <div style={{ margin: " 0px 30px" }}>
        <Grid>
          <Grid.Row>
            {/* <Grid.Column width={3}>
              <div style={{ margin: " 10px 20px" }}>
                <h4>Các danh mục khác</h4>
                <div className="ui vertical menu ">
                  <a className="item" href="!#">
                    Dịch vụ
                  </a>
                  <a className="item" href="!#">
                    Thú cưng
                  </a>
                  <a className="item" href="!#">
                    Việc làm
                  </a>
                  <a className="item" href="!#">
                    Thời trang
                  </a>
                  <a className="item" href="!#">
                    Xe cộ
                  </a>
                  <a className="item" href="!#"></a>
                  <div className="item">
                    <div className="ui icon input">
                      <input type="text" placeholder="Search mail..." />
                      <i aria-hidden="true" className="search icon"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="banner-doc2"></div>
            </Grid.Column> */}
            <Grid.Column width={8}>
              {posts.map(post => (
                <MobileItem key={post._id} post={post} />
              ))}
            </Grid.Column>
            <Grid.Column width={8}>
              {posts.map(post => (
                <MobileItem key={post._id} post={post} />
              ))}
            </Grid.Column>

            {/* <Grid.Column width={3}>
              <div className="banner-doc"></div>
              <div className="banner-doc"></div>
            </Grid.Column> */}
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  post: state.post
});
export default connect(mapStateToProps, { getPost })(Mobile);
