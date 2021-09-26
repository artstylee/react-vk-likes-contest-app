import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import {
  View,
  ScreenSpinner,
  AdaptivityProvider,
  AppRoot,
  Group,
  FormItem,
  Input,
  FormLayoutGroup,
  Button,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

const App = () => {
  const [userId, setUserId] = useState("");
  const [postId, setPostId] = useState("");
  const [users, setUsers] = useState([]);
  const [url, setUrl] = useState("");
  const [winner, setWinner] = useState("");

  function fetchUsers() {
    bridge
      .send("VKWebAppCallAPIMethod", {
        method: "likes.getList",
        params: {
          count: "1000",
          extended: "0",
          filter: "likes",
          friends_only: "0",
          item_id: postId,
          offset: "0",
          owner_id: userId,
          skip_own: "1",
          type: "post",
          v: "5.131",
          access_token:
            "aab3c1a3aab3c1a3aab3c1a33daacab60caaab3aab3c1a3cbfc87b1e05a870e526fa1d6",
        },
      })
      .then((d) => setUsers(d.response.items))
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    let result = Math.floor(Math.random() * (users.length + 1));
    setWinner(users[result]);
  }, [users]);

  function getUsersWhoLikedPost() {
    fetchUsers();
  }

  function controlUrl(e) {
    setUrl(e.currentTarget.value);
  }

  useEffect(() => {
    let operation1 = url.split(`?w=wall`).pop();
    let operation2 = operation1.split("_")[0];
    let operation3 = operation1.split("_")[1];
    if ((operation2, operation3)) {
      setUserId(operation2);
      setPostId(operation3);
    } else {
      setUserId("");
      setPostId("");
    }
  }, [url]);

  return (
    <AdaptivityProvider>
      <AppRoot>
        <Group>
          <FormItem top="Ссылка на пост">
            <Input
              type="url"
              onChange={controlUrl}
              value={url}
              placeholder="https://vk.com/id465705?w=wall465705_4615"
            />
          </FormItem>
          <FormLayoutGroup mode="horizontal">
            <FormItem bottom="User ID">
              <Input type="number" disabled value={userId} />
            </FormItem>
            <FormItem bottom="Post ID">
              <Input type="number" disabled value={postId} />
            </FormItem>
          </FormLayoutGroup>
          <Button
            size="l"
            style={{ padding: 5 }}
            align="center"
            onClick={getUsersWhoLikedPost}
          >
            Fetch
          </Button>
        </Group>
      </AppRoot>
    </AdaptivityProvider>
  );
};

export default App;
