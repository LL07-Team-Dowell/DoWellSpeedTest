
# DoWell SpeedTest using Datacube and SpeedOfMe

## Overview

This project aims to provide a speed test utility using Datacube and SpeedOfMe to measure internet speed and collect relevant metadata. It consists of a backend and a frontend component.

## Backend Setup

### Environment Configuration

1. Create an environment file named `.env` in the `backend` directory.
2. Add the following configuration to the `.env` file:

```env
PORT=9000
API_KEY=1b834e07-c68b-4bf6-96dd-ab7cdc62f07f
DATABASE=meta_data_q
COLLECTIONNAME=examplecollection
```

### Installation and Execution

To set up the backend using Docker:

1. Navigate to the project directory.
2. Run the following command to start the Docker containers:

```bash
docker-compose up
```

To stop the Docker containers, run:

```bash
docker-compose down
```

## Issue Tracking

Please check out our [issue tracker](https://github.com/LL07-Team-Dowell/dowellspeedtest/issues) for any known issues or to report new ones.

---

Feel free to reach out to us with any questions or concerns!