import React, { Fragment, useEffect, useState } from "react";
import getSocialPostsData from "./localDataBase/getSocialPostsData";
import sortByOptions from "./utils/sortByOptions";
import PostsCard from "./Components/postsCard";
import Pagination from "./Components/pagination";
import Loader from "./Components/loader";
import "./assets/css/socialPosts.css";

const Socialposts = () => {
  const [state, setState] = useState({
    pageNumber: 1,
    pageSize: 5,
    sortBy: "",
  });

  const [postsData, setPostsData] = useState({ posts: [], totalPage: 0 });

  const[isLoading,setIsLoading] = useState(false);

  useEffect(() => {
    fetchSocialPosts();
  }, []);

  const fetchSocialPosts = async (data) => {
    const newState = { ...state, ...data };
    setState(newState);
    setIsLoading(true);
    const { data: posts, count } = await getSocialPostsData(newState);
    setIsLoading(false);
    setPostsData({ posts, totalPage: Math.ceil(count / newState.pageSize) });
  };

  return (
    <Fragment>
      <div>
      {isLoading && <Loader />}
        <nav className="header">
          <div>
            <label>Sort By : </label>
            <select
              value={state.sortBy}
              onChange={(e) =>
                fetchSocialPosts({ sortBy: e.target.value, pageNumber: 1 })
              }
            >
              {sortByOptions.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </nav>
      </div>
      <div className="post_container">
        {postsData.posts.map((post, index) => (
          <PostsCard key={index} post={post} />
        ))}
      </div>
      <Pagination
        totalPage={postsData.totalPage}
        onPageChange={(pageNumber) => fetchSocialPosts({pageNumber})}
        activePageNumber={state.pageNumber}
        pageSize={state.pageSize}
        onPageSizeChange={(pageSize) =>
          fetchSocialPosts({ pageSize, pageNumber: 1 })
        }
      />
    </Fragment>
  );
};

export default Socialposts;
