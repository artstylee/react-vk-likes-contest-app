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
import { Icon20User } from "@vkontakte/icons";

const App = () => {
  const [userId, setUserId] = useState("");
  const [postId, setPostId] = useState("");
  const [users, setUsers] = useState([]);
  const [url, setUrl] = useState("");
  const [winner, setWinner] = useState("");
  const [disabled, setDisabled] = useState(false);
  let operation2;
  let operation3;

  function controlUrl(e) {
    if (e.currentTarget.value !== url) {
      setDisabled(false);
      setUrl(e.currentTarget.value);
    }
  }

  useEffect(() => {
    let operation1 = url.split(`wall`).pop();
    operation2 = operation1.split("_")[0];
    operation3 = operation1.split("_")[1];
    if ((operation2, operation3)) {
      setUserId(operation2);
      setPostId(operation3);
    } else {
      setUserId("");
      setPostId("");
    }
  }, [url]);

  function getUsersWhoLikedPost() {
    fetchUsers();
    setDisabled(true);
  }

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

  function countWinner() {
    let result = Math.floor(Math.random() * users.length );
    console.log(result)
    setWinner(users[result]);
  }

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
              pattern="https://.*"
              size="30"
              required
            />
          </FormItem>
          <FormLayoutGroup mode="horizontal">
            <FormItem bottom="User ID">
              <Input
                type="number"
                disabled
                value={userId}
                after={<Icon20User aria-hidden="true" />}
              />
            </FormItem>
            <FormItem bottom="Post ID">
              <Input type="number" disabled value={postId} />
            </FormItem>
          </FormLayoutGroup>
          <FormLayoutGroup mode="horizontal">
            <Button
              mode="secondary"
              size="l"
              style={{ marginRight: 5 }}
              stretched
              disabled={disabled}
              onClick={getUsersWhoLikedPost}
            >
              Fetch
            </Button>
            <Button size="l" stretched onClick={countWinner}>
              Count Winner
            </Button>
          </FormLayoutGroup>
          <FormLayoutGroup mode="horizontal">
          <Input type="number" disabled value={winner} />
          </FormLayoutGroup>
        </Group>
      </AppRoot>
    </AdaptivityProvider>
  );
};

export default App;
