import React from 'react';
import ReactTagInput from "@pathofdev/react-tag-input";

export default class AdminCreateNewForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.article ? props.article.id: '',
            title: props.article ? props.article.title: '',
            content: props.article ? props.article.content: '',
            tags: props.article ? props.article.tags: []
        };
    }

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    }

    onContentChange = (e) => {
        const content = e.target.value;
        this.setState(() => ({ content }));
    }
    
    onSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit({
            title: this.state.title,
            content: this.state.content,
            tags: this.state.tags
        });
    }

    onRemove = (e) => {
        e.preventDefault();

        this.props.onRemove({
            id: this.state.id
        });
    }

    onBack = (e) => {
        e.preventDefault();
        this.props.onBack();
    }

    onTagsChange = (newTags) => {
        const tags = newTags;
        this.setState(() => ({ tags }));
    }

    render () {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input 
                        type='text'
                        placeholder='Title'
                        className="text-input"
                        value={this.state.title}
                        onChange={this.onTitleChange}
                    >
                    </input>
                    <textarea
                        placeholder='Content of your article'
                        className="text-area"
                        value={this.state.content}
                        onChange={this.onContentChange}
                    >
                    </textarea>
                    <ReactTagInput
                        placeholder="Tag(s)"
                        editable={true}
                        removeOnBackspace={true}
                        tags={this.state.tags}
                        onChange={(newTags) => this.onTagsChange(newTags)}
                    />
                    <button>{this.props.ctaText}</button>
                </form>
                { 
                    this.props.ctaText==="Edit article" ?
                        <form className="form" onSubmit={this.onRemove}>
                            <button>Remove</button>
                        </form>
                    :
                        <form className="form" onSubmit={this.onBack}>
                            <button>Back</button>
                        </form>
                        
                } 
                
                
            </div>        
        );
    }
}