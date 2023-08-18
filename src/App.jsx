import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  const [currentDate, _setCurrentDate] = useState(new Date());

  const [output, setOutput] = useState([
    {
      input: "login nykraft ******",
      output: [
        `Successfully logged in as nykraft at ${currentDate.toLocaleString()}`,
      ],
      outputStyle: "system-output",
    },
  ]);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const commandOutput = processCommand(inputValue);
    setOutput([
      ...output,
      {
        input: inputValue,
        output: commandOutput.output,
        outputStyle: commandOutput.style,
      },
    ]);
    setInputValue("");
  };

  useEffect(() => {
    const outputDiv = document.querySelector(".output");
    outputDiv.scrollTop = outputDiv.scrollHeight + 100;
  }, [output]);

  const processCommand = (command) => {
    const [cmd, ...args] = command.trim().split(" ");

    switch (cmd) {
      case "ls":
        return {
          output: [
            "logs/",
            "world/",
            "tana/",
            "banned-ips.json",
            "commands.yml",
            "eula.txt",
            "ops.json",
            "permissions.yml",
            "server.properties",
          ],
          style: "system-output",
        };
      case "echo":
        return {
          output: args.join(" "),
          style: "system-output",
        };
      case "whoami":
        return {
          output: "nykraft/tana",
          style: "system-output",
        };
      case "help":
        return {
          output: [
            "ls - list files",
            "echo - print text",
            "whoami - print user",
            "help - print help",
            "cat - print file",
            "cd - change directory",
          ],
          style: "system-output",
        };

      case "cd":
        if (args[0] === "..") {
          return {
            output: "You are already in the root directory",
            style: "system-output-error",
          };
        }

        if (
          args[0] !== "tana/" &&
          args[0] !== "logs/" &&
          args[0] !== "world/"
        ) {
          return {
            output: `No such file or directory: ${args[0]}`,
            style: "system-output-error",
          };
        }

        if (args[0] === "tana/") {
          return {
            output: [
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
              "Permission denied",
            ],
            style: "system-output-error",
          };
        }

        return {
          output: "Permission denied",
          style: "system-output-error",
        };

      case "cat":
        switch (args[0]) {
          case "banned-ips.json":
            return {
              output: ["214.79.10.118", "115.167.242.86"],
              style: "system-output",
            };
          case "commands.yml":
            return {
              output: [
                "command-block-overrides: []",
                "ignore-vanilla-permissions: false",
                "aliases: []",
              ],
              style: "system-output",
            };
          case "eula.txt":
            return {
              output: [
                "#By changing the setting below to TRUE you are indicating your agreement to our EULA (https://account.mojang.com/documents/minecraft_eula).",
                "#Thu Jul 07 99:99:99 UTC 9999",
                "eula=true",
              ],
              style: "system-output",
            };
          case "ops.json":
            return {
              output: [
                "[",
                "  {",
                '    "uuid": "2865d52d-f521-4913-b654-69044cdaf003",',
                '    "name": "ENDESGA"',
                '    "level": 4',
                '    "bypassesPlayerLimit": false',
                "  }",
                "]",
              ],
              style: "system-output",
            };
          case "permissions.yml":
            return {
              output: ["permissions:", "  default:"],
              style: "system-output",
            };
          case "server.properties":
            return {
              output: [
                "#Minecraft server properties",
                "#Thu Jul 07 99:99:99 UTC 9999",
                "enable-jmx-monitoring=false",
                "rcon.port=25575",
                "level-seed=",
                "gamemode=survival",
                "enable-command-block=true",
                "enable-query=false",
                "generator-settings={}",
                "level-name=world",
                "motd=nykraft",
                "query.port=25565",
                "pvp=true",
                "generate-structures=true",
                "max-chained-neighbor-updates=100000",
                "difficulty=normal",
                "network-compression-threshold=256",
                "max-tick-time=60000",
                "require-resource-pack=false",
                "use-native-transport=true",
                "max-players=77",
                "online-mode=true",
                "enable-status=true",
                "allow-flight=true",
                "broadcast-rcon-to-ops=true",
                "view-distance=10",
                "server-ip=",
                "resource-pack-prompt=",
                "allow-nether=true",
                "server-port=25565",
                "enable-rcon=false",
                "sync-chunk-writes=true",
                "op-permission-level=4",
                "prevent-proxy-connections=false",
                "hide-online-players=false",
                "resource-pack=",
                "entity-broadcast-range-percentage=100",
                "simulation-distance=10",
                "rcon.password=",
                "player-idle-timeout=0",
                "debug=false",
                "force-gamemode=false",
                "rate-limit=0",
                "hardcore=false",
                "white-list=true",
                "broadcast-console-to-ops=true",
                "spawn-npcs=true",
                "previews-chat=true",
                "spawn-animals=true",
                "function-permission-level=2",
                "level-type=minecraft/default",
                "text-filtering-config=",
                "spawn-monsters=true",
                "enforce-whitelist=true",
                "spawn-protection=0",
                "resource-pack-sha1=",
                "max-world-size=29999984",
              ],
              style: "system-output",
            };
        }
        break;

      default:
        return {
          output: `Command not found: ${cmd}`,
          style: "system-output-error",
        };
    }
  };

  return (
    <div className="terminal">
      <div className="output">
        {output.map((item, index) => (
          <div key={index}>
            <span className="prompt">$</span> {item.input}
            <br />
            {item.output &&
              (item.output instanceof Array ? (
                item.output.map((line, index) => (
                  <div key={index} className={item.outputStyle}>
                    {line}
                  </div>
                ))
              ) : (
                <div className={item.outputStyle}>{item.output}</div>
              ))}
          </div>
        ))}
      </div>

      <form onSubmit={handleCommandSubmit} className="input">
        <span className="prompt">&gt; </span>{" "}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          ref={inputRef}
        />
      </form>
    </div>
  );
}

export default App;
