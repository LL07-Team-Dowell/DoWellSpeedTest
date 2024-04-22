import { useState, useEffect } from "react";
import scriptjs from "scriptjs";
import { SomApiAccount, SomApiDomain, scriptURL } from "../util/constants";

export function useSpeedTest() {
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  const [hostName, setHostName] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [jitter, setJitter] = useState(0);
  const [latency, setLatency] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState(0);

  const [server, setServer] = useState("");
  const [agent, setAgent] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [isStartButtonClicked, setIsStartButtonClicked] = useState(false);
  let SomApi;

  //   useEffect(() => {
  //     scriptjs(scriptURL, onScriptLoad);
  //   }, []);

  const onScriptLoad = () => {
    SomApi = window.SomApi;
    SomApi.account = SomApiAccount;
    SomApi.domainName = SomApiDomain;
    SomApi.onTestCompleted = onTestCompleted;

    SomApi.startTest();
  };

  const runSpeedTest = () => {
    setIsStartButtonClicked(true);
  };

  const onTestCompleted = (result) => {
    const {
      maxDownload,
      hostname,
      ip_address,
      jitter,
      latency,
      maxUpload,

      testServer,
      userAgent,
    } = result;
    setDownloadSpeed(maxDownload);
    setUploadSpeed(maxUpload);
    setLatency(latency);
    setJitter(jitter);
    setHostName(hostname);
    setIpAddress(ip_address);
    setServer(testServer);
    setAgent(userAgent);
    setIsLoading(false);
  };

  return {
    isLoading,
    result: {
      downloadSpeed,
      hostName,
      ipAddress,
      uploadSpeed,
      server,
      agent,
      latency,
      jitter,
    },
    runSpeedTest,
  };
}
