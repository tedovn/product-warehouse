import { GraphQLError } from "graphql";
import {
  ApolloError,
  AuthenticationError,
  toApolloError,
  SyntaxError,
  ValidationError,
  ForbiddenError,
  UserInputError,
} from "apollo-server-express";

export const errorHandler = (error: GraphQLError) => {
  let { message, extensions } = error;

  // There is no requirement for error handler
  // TODO: integrate with log service (ELK or other provider)
  switch (error.constructor) {
    case AuthenticationError:
      console.info('AuthenticationError');
      break;
    case SyntaxError:
      console.info('SyntaxError');
      break;
    case ValidationError:
      console.info('ValidationError');
      break;
    case ForbiddenError:
      console.info('ForbiddenError');
      break;
    case UserInputError:
      console.info('UserInputError');
      break;
    default:
      console.info('INTERNAL_SERVER_ERROR');
      message = extensions?.exception?.name ? `${extensions?.exception?.name}: ${extensions?.exception?.constraint}` : message;
      break;
  }

  return new ApolloError(message, extensions.code, extensions);
}