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
  Card,
  FormLayout,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { Icon20User } from "@vkontakte/icons";
import SlotMachine from "./slotmachine";

const App = () => {
  const [userId, setUserId] = useState("");
  const [postId, setPostId] = useState("");
  const [users, setUsers] = useState([]);
  const [url, setUrl] = useState("https://vk.com/id465705?w=wall465705_4615");
  const [winner, setWinner] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [arr8, setArr8] = useState([]);
  let operation2;
  let operation3;
  let operation5;
  let operation6;
  let operation7 = [];
  let operation8 = [];

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
    let result = Math.floor(Math.random() * users.length);
    setWinner(users[result]);
  }

  useEffect(() => {
    let operation4 = winner;
    if (operation4 === 0) {
      operation5 = "00000000" + operation4;
    } else if (operation4 < 10) {
      operation5 = "00000000" + operation4;
    } else if (operation4 < 100) {
      operation5 = "0000000" + operation4;
    } else if (operation4 < 1000) {
      operation5 = "000000" + operation4;
    } else if (operation4 < 10000) {
      operation5 = "00000" + operation4;
    } else if (operation4 < 100000) {
      operation5 = "0000" + operation4;
    } else if (operation4 < 1000000) {
      operation5 = "000" + operation4;
    } else if (operation4 < 10000000) {
      operation5 = "00" + operation4;
    } else if (operation4 < 100000000) {
      operation5 = "0" + operation4;
    } else {
      operation5 = operation4.toString();
    }
    for (let i = 0; i < 9; i++) {
      operation6 = operation5.slice(i, i + 1);
      operation7.push(operation6);
    }
    operation8 = operation7.map((el) => el * 30);
    setArr8(operation8);
  }, [winner]);

  return (
    <AdaptivityProvider>
      <AppRoot>
        <FormLayout>
          <FormItem top="Ссылка на пост">
            <Input
              type="url"
              onChange={controlUrl}
              value={url}
              placeholder="https://vk.com/id465705?w=wall465705_4615"
              pattern="https://vk.com/"
              size="30"
              required
            />
          </FormItem>
          <FormLayoutGroup mode="horizontal">
            <FormItem bottom="User ID">
              <Input type="number" disabled value={userId} />
            </FormItem>
            <FormItem bottom="Post ID">
              <Input type="number" disabled value={postId} />
            </FormItem>
            <FormItem>
              <Button
                mode="secondary"
                type="submit"
                size="l"
                style={{ marginRight: 5 }}
                stretched
                disabled={disabled}
                onClick={getUsersWhoLikedPost}
              >
                Load Users
              </Button>
            </FormItem>
          </FormLayoutGroup>
        </FormLayout>
        <Group>
          <FormLayoutGroup mode="horizontal">
            <Button size="l" stretched onClick={countWinner}>
              Count Winner
            </Button>
          </FormLayoutGroup>
          <FormLayoutGroup mode="horizontal">
            <Input type="number" disabled value={winner} />
            <SlotMachine marginArr={arr8} />
          </FormLayoutGroup>
        </Group>
      </AppRoot>
    </AdaptivityProvider>
  );
};

export default App;
