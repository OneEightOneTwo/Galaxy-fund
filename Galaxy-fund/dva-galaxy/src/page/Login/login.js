import React from 'react';
// import { connect } from 'dva';
import style from './login.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// 选项卡
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';



function TabContainer(props) {
  // const { classes } = props;
  return (
    //  style={{ padding: 8 * 2 }}控制内容块的padding
    <Typography component="div" style={{ height: '300px', }}>
      {props.children}
    </Typography>

  );
}
TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={style.c_login}>
        <div className={style.container}>
          <div className={style.c_header}>
            <div className={style.c_logo}></div>
            <h1 className={style.h1}>
              网上交易账户登录
          </h1>
          </div>
          <div className={classes.c_main}>
            <AppBar position="static" style={{ background: 'white', color: '#420231', }}>
              <Tabs value={value} onChange={this.handleChange}>
                <Tab label="个人客户" style={{ width: '50%', fontSize: '22px' }} />
                <Tab label="机构客户" style={{ width: '50%', fontSize: '22px' }} />

              </Tabs>
            </AppBar>
            {value === 0 && <TabContainer >
              <form >
                <fieldset style={{
                  height: '50px', borderRadius: '5px', fontSize: ' 24px',
                  borderColor: '#ececec', marginTop: '24px'
                }}>
                  <legend style={{ color: '#ccc', fontSize: '14px' }}>证件类型</legend>
                  <select name="" id="" className={style.input}>
                    <option value="" checked>身份证 </option>
                    <option value="">基金账号</option>
                    <option value="">军官证</option>
                    <option value="">士兵证</option>
                    <option value="">回乡证</option>
                    <option value="">沪口本</option>
                  </select>
                </fieldset>
                <input type="text" className={style.input2} placeholder="证件号码" />
                <input type="password" className={style.input2} placeholder="密码" />
                <input type="text" className={style.input2} placeholder="验证码" style={{ width: '50%' }} />
                <button className={style.input2} style={{ background: '#ffff', border: ' 2px solid #fedf32', color: '#fedf32',cursor:'pointer'}}>登录</button>
                <ul>
                  <li style={{float:'left' ,fontSize:'18px',margin: '3% 0 0 29%'}} className={style.hand}>忘记密码</li>
                  <li style={{float:'left' ,fontSize:'18px' ,color:'#59c2e6',margin:'3% 0 0 17%' }} className={style.hand}>即刻开户</li>
                </ul>
              </form>
            </TabContainer>}
            {value === 1 && <TabContainer>
              <form >
                <input type="text" className={style.input2} placeholder="基金账号" />
                <input type="password" className={style.input2} placeholder="密码" />
                <input type="text" className={style.input2} placeholder="验证码" style={{ width: '50%' }} />
                <button className={style.input2} style={{ background: '#ffff', border: ' 2px solid #fedf32', color: '#fedf32',cursor:'pointer'}}>登录</button>
              </form>
            </TabContainer>}
          </div>
        </div>
        <footer className={style.c_footer}>
        <hr/>
        <ul className={style.end}>
          <li style={{marginLeft:'34%'}}>返回首页</li>
          <li>常见问题</li>
          <li>客服热线400-820-0860</li>
        </ul>
        </footer>
      </div>
    );
  }
}
SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);

// IndexPage.propTypes = {
// };

