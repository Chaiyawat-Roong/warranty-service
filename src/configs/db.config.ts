import { Client , Pool, PoolClient, PoolConfig} from 'pg';

const poolConfig: PoolConfig = {
  connectionString: 'postgres://pucurpou:s0j3l1_iLkRsa99HeLYujii4wgXM8jt5@arjuna.db.elephantsql.com/pucurpou',
  max: 2, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000, // Timeout for idle clients in the pool
  connectionTimeoutMillis: 2000, // Timeout to establish new connections
};

export const pool = new Pool(poolConfig);

export async function getClient(): Promise<PoolClient> {
  const client = await pool.connect();
  return client;
}

