import React from "react";
import { Route, Switch } from "react-router-dom";
import { BlogPage } from "../../pages/blogPage"
import { HomePage } from "../../pages/homePage";
import { BlogPostPage } from "../../pages/blogPostPage";

export default function MainContentRouter() {
  return (
    <div className="app-content">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/blog" exact component={BlogPage} />
        <Route path="/blog/:blogPost" component={BlogPostPage} />
        <Route component={HomePage} />
      </Switch>
    </div>
  )
}