declare module '*.png';

// declare module "services/apollo_SR" {
// 	import { ApolloClient, DocumentNode, NormalizedCacheObject } from "@apollo/client";
// 	export const client: ApolloClient<NormalizedCacheObject>;
// 	export const GET_CONTINENTS: DocumentNode
// }

declare module "app3/CounterAppOne" {
	const CounterAppOne: React.ComponentType;
	export default CounterAppOne;
}