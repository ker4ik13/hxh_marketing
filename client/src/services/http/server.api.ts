import { SERVER_URL } from '@/shared';
import axios from 'axios';

export const $server = axios.create({
	withCredentials: true,
	baseURL: `${SERVER_URL}`,
});
