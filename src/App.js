import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import {
  View,
  AdaptivityProvider,
  AppRoot,
  FormItem,
  Input,
  FormLayoutGroup,
  Button,
  FormLayout,
  Panel,
  Cell,
  Link,
  List,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import SlotMachine from "./slotmachine";

const App = () => {
  const [userId, setUserId] = useState("");
  const [postId, setPostId] = useState("");
  const [users, setUsers] = useState([]);
  const [url, setUrl] = useState("https://vk.com/id465705?w=wall465705_4615");
  const [winner, setWinner] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [arr8, setArr8] = useState([]);
  const [activePanel, setActivePanel] = useState("panel1");
  let operation2;
  let operation3;
  let operation4 = winner;
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
    operation8 = operation7.map((el) => el * 50);
    setArr8(operation8);
  }, [winner]);

  return (
    <AdaptivityProvider>
      <AppRoot>
        <View activePanel={activePanel}>
          <Panel id="panel1">
            <FormLayout>
              <FormItem top="Ссылка на пост">
                <Input onChange={controlUrl} value={url} size="30" required />
              </FormItem>
              <FormLayoutGroup mode="horizontal">
                <FormItem bottom="User ID">
                  <Input type="number" disabled value={userId} />
                </FormItem>
                <FormItem bottom="Post ID">
                  <Input type="number" disabled value={postId} />
                </FormItem>
              </FormLayoutGroup>
              <FormLayoutGroup>
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
                    Load users
                  </Button>
                </FormItem>
                <FormItem>
                  <Button
                    size="l"
                    stretched
                    onClick={countWinner}
                    disabled={!disabled}
                  >
                    Shuffle
                  </Button>
                </FormItem>
              </FormLayoutGroup>
            </FormLayout>
            <FormLayoutGroup mode="horizontal">
              <FormItem>
                <Link target="_blank" href={`https://vk.com/id${winner}`}>
                  <Button size="l" stretched mode="commerce">
                    Winner
                  </Button>
                </Link>
              </FormItem>
              <FormItem>
                <Button
                  size="l"
                  onClick={() => {
                    setActivePanel("panel2");
                  }}
                  stretched
                  mode="secondary"
                >
                  All profiles
                </Button>
              </FormItem>
            </FormLayoutGroup>

            <SlotMachine marginTop={arr8} />
          </Panel>

          <Panel id="panel2">
            <FormLayoutGroup mode="horizontal">
              <Button
                style={{ marginLeft: "20px" }}
                size="l"
                onClick={() => {
                  setActivePanel("panel1");
                }}
              >
                Back
              </Button>
            </FormLayoutGroup>
            <List>
              {users.map((el) => {
                return (
                  <Link target="_blank" href={`https://vk.com/id${el}`}>
                    <Cell
                      style={{
                        margin: "20px",
                        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                      }}
                    >
                      {el}
                    </Cell>
                  </Link>
                );
              })}
            </List>
          </Panel>
        </View>
      </AppRoot>
    </AdaptivityProvider>
  );
};

export default App;
