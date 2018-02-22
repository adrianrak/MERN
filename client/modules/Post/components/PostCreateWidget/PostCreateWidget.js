import React, { Component, PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

// Import Style
import styles from './PostCreateWidget.css';

export class PostCreateWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localData: '',
    };
  }

  addPost = () => {
    const nameRef = this.refs.name;
    const titleRef = this.refs.title;
    const contentRef = this.refs.content;
    const votes = 0;

    if (nameRef.value && titleRef.value) {
      this.props.addPost(nameRef.value, titleRef.value, this.state.localData, votes);
      nameRef.value = titleRef.value = this.state.localData = '';
      localStorage.removeItem('contentRef');
    }
  };

  
  componentDidMount() {
    const localStorageData = localStorage.getItem('contentRef');
    this.setState({
      localData: localStorageData || '',
    });
  }

  handleChange = (e) => {
    this.setState({
      localData: e.target.value,
    });
    localStorage.setItem('contentRef', e.target.value);
  }

  render() {
    const cls = `${styles.form} ${(this.props.showAddPost ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}><FormattedMessage id="createNewPost" /></h2>
          <input placeholder={this.props.intl.messages.authorName} className={styles['form-field']} ref="name" />
          <input placeholder={this.props.intl.messages.postTitle} className={styles['form-field']} ref="title" />
          <textarea onChange={this.handleChange} value={this.state.localData} placeholder={this.props.intl.messages.postContent} className={styles['form-field']}></textarea>
          <a className={styles['post-submit-button']} href="#" onClick={this.addPost}><FormattedMessage id="submit" /></a>
        </div>
      </div>
    );
  }
}

PostCreateWidget.propTypes = {
  addPost: PropTypes.func.isRequired,
  showAddPost: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(PostCreateWidget);
